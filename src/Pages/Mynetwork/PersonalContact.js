import React from "react";
import Button from "../../Components/Button/Button";
import FeedFooter from "../../Components/FeedFooter/FeedFooter";
import Input from "../../Components/Input/Input";

function PersonalContact() {
  return (
    <div className="list d-flex flex-column align-items-center">
      <p className="smallHeading makeCenter black">Add personal contacts</p>
      <p className="smallText black footerLink makeCenter mt-1">
        We’ll periodically import and store your contacts to help you and others
        connect. You choose who to connect to and who to invite. Learn more
      </p>
      <Input className="mt-2 p-2 w-80 border-1" />
      <Button name="continue" className="w-50 mt-2 btn btnBlue mb-2 pointer" />
      <FeedFooter />
    </div>
  );
}

export default PersonalContact;
