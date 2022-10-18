// routes to build resume and conver it to pdf

const asynchandler = require('../../middleware/asynchandler')
const ErrorResponse = require('../../utils/errorhandler')
const client  = require('../../utils/database')
const fs = require('fs-extra')
const hbs = require('handlebars')
const path = require('path')
const puppeteer = require('puppeteer')
const { profile } = require('console')

exports.resumeBuilder = asynchandler(async (req,res,next)=>{
   try{
    let data = await client.profile.findFirst({
        where:{
                id:req.params.profileid,
        },
        include:{
          usereducation:{
            select:{
              startDate:true,
              endDate:true,
              course:true,
              student:{
                select:{
                  name:true,

                }
              }

            }
          },
          companys:{
            select:{
              startDate:true,
              endDate:true,
              description:true,
              position:true,
              company:{
                select:{
                  name:true,
                  description:true
                }
              }
            }
          },
          skills:{
            select:{
              name:true,
            }
          },
         
        }
        
      })
      const address = await client.address.findUnique({
        where:{
          id:data.addressid
        },
        select:{
          state:true,
          city:true,
          country:true
        }
      })
      

    console.log("build function working")
      let htmldata = {}
      htmldata.projects = [{title:"project 1",description:"this is the discription for the projectb 1"},
                      {title:"project 2",description:"this is the discription for the projectb 2"}]
      htmldata.intrest = ["gaming","travelling","sketching","singing"]
      htmldata.description= data.description
      htmldata.addressid = address
      
      htmldata.profilepic =data.profilepic
      htmldata.email = req.user.email
      htmldata.mobileNumber = data.mobileNumber
      htmldata.gitHub = "github.com/oliwil"
      htmldata.firstName = data.firstName
      htmldata.lastName = data.lastName
       data.usereducation.forEach(ele=>{
        ele.startDate = new Date(ele.startDate).getFullYear()
        ele.endDate = new Date(ele.endDate).getFullYear()
      })
      htmldata.usereducation = data.usereducation
      // [
      //   {startDate:"2019",endDate:"2023",course:"BE CSE",student:{name:"PEC"}},
      //   {startDate:"2017",endDate:"2019",course:"12th",student:{name:"KVS"}},
      // ]
       htmldata.companys = data.companys
       //[{startDate:"2019",endDate:"2022",description:`Utilized PySpark to distribute data processing on large streaming datasets to improve ingestion and processing speed
      // Build basic ETL that ingested transactional and event data from a web app`,position:"Accounts Genral",company:{name:"ZOHO"}},
      // {startDate:"2019",endDate:"2022",description:"user company description",position:"Accounts Genral",company:{name:"ZOHO"}}]
      htmldata.skills = data.skills
      
      //creating the resume pdf
      const content  = await compile('theme1',htmldata)
      const browser = await puppeteer.launch(content)
      const page = await browser.newPage()
      
      
      await page.setContent(content)
      await page.emulateMediaType('print')
      await page.pdf({
        path:'resume.pdf',
        format:'A4',
        printBackground:true,

      })
      await browser.close()
      res.download(path.resolve("./resume.pdf"))
      fs.remove(path.resolve("./resume.pdf"))
     
   }catch(err){ return next(new ErrorResponse(err.message,500))}
      
    })

    // utility function for compailing the hbs file 

    const compile  = async function(templateName,data){
      const filePath = path.join(process.cwd(),'Resume-template',`${templateName}.hbs`)
      const html  = await fs.readFile(filePath,'utf-8')
      return hbs.compile(html)(data)
    }