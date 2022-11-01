import React from "react";
import CardList from "../../Components/CardList";
import SkeletonLoader from "../../Components/SkeletonLoader";
import PersonalContact from "./PersonalContact";

function Manage() {
  const manage_my_network_list = [];
  return (
    <div className="sm-hide card mt-2 makeSticky">
      {manage_my_network_list.length != 0 ? (
        <p className="smallHeading mt-1 mb-1 list">Manage my network</p>
      ) : (
        <SkeletonLoader className="w-30 mt-1 mb-1 ms-1 rounded-1 h-1" />
      )}
      <CardList list={manage_my_network_list} />
      <div className="hr mt-1 mb-1"></div>
      <div>
        <PersonalContact />
      </div>
    </div>
  );
}

export default Manage;
