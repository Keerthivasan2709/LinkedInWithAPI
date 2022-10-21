import React, { Component } from 'react'
import SettingOptions from './SettingOptions';
import SettingTitle from './SettingTitle';
class Setting extends Component {
    render() {
        document.title = "Account Preferences"
        return (
            <>
                <div className='bg-white' >
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/LinkedIn_Icon_naugpk.svg" style={{ width: "40px" }} className="p-2" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: "0.3fr 1fr" }}>
                    <SettingTitle />
                    <SettingOptions />
                </div>
            </>
        )
    }
}
export default Setting;