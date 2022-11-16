import React from "react";
import CardList from "../../Components/CardList";
import SkeletonLoader from "../../Components/SkeletonLoader";
import PersonalContact from "./PersonalContact";

function Manage() {
  const manage_my_network_list = [
    {
      id: "id001",
      name: "Connections",
      image:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1664963003/index_t6htx7.svg",
      counts: "",
    },
    {
      id: "id001",
      name: "Contacts",
      image:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1664962104/index_tt2h3s.svg",
      counts: "",
    },
    {
      id: "id001",
      name: "Following & Followers",
      image:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1666796458/index_zsi6mp.svg",
      counts: "",
    },
    {
      id: "id001",
      name: "Groups",
      image:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1664962398/index_tz1fcg.svg",
      counts: "",
    },
    {
      id: "id001",
      name: "Events",
      image:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1664962491/index_kwujqm.svg",
      counts: "",
    },
    {
      id: "id001",
      name: "Pages",
      image:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1664962539/index_u7v0mu.svg",
      counts: "",
    },
    {
      id: "id001",
      name: "Newsletters",
      image:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1664962593/index_giysj0.svg",
      counts: "",
    },
    {
      id: "id001",
      name: "Hashtag",
      image:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1664264190/Tag_p58xpo.svg",
      counts: "",
    },
  ];
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
