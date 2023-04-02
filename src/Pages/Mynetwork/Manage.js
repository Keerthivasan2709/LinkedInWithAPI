import React from "react";
import {
  Contacts,
  Eventpics,
  Groups,
  Hashatg,
  Network,
  NewsletterPics,
  PagesPics,
} from "../../Assets/Images/Pictures";
import CardList from "../../Components/CardList";
import SkeletonLoader from "../../Components/SkeletonLoader";
import PersonalContact from "./PersonalContact";

function Manage() {
  const manage_my_network_list = [
    {
      id: "id001",
      name: "Connections",
      image: <Network className="iconPassiveColor" />,
      counts: "",
    },
    {
      id: "id001",
      name: "Contacts",
      image: <Contacts />,
      counts: "",
    },
    {
      id: "id001",
      name: "Following & Followers",
      image: <Network className="iconPassiveColor" />,
      counts: "",
    },
    {
      id: "id001",
      name: "Groups",
      image: <Groups />,
      counts: "",
    },
    {
      id: "id001",
      name: "Events",
      image: <Eventpics />,
      counts: "",
    },
    {
      id: "id001",
      name: "Pages",
      image: <PagesPics />,
      counts: "",
    },
    {
      id: "id001",
      name: "Newsletters",
      image: <NewsletterPics />,
      counts: "",
    },
    {
      id: "id001",
      name: "Hashtag",
      image: <Hashatg />,
      counts: "",
    },
  ];
  return (
    <div className="sm-hide card mt-2 makeSticky" style={{ width: "322px" }}>
      {manage_my_network_list.length != 0 ? (
        <p className="smallHeading mt-1 mb-1 list black">Manage my network</p>
      ) : (
        <SkeletonLoader className="w-30 mt-1 mb-1 ms-1 rounded-1 h-1" />
      )}
      <CardList list={manage_my_network_list} />
      <div className="vr mt-1 mb-1"></div>
      <div>
        <PersonalContact />
      </div>
    </div>
  );
}

export default Manage;
