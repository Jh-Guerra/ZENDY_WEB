import React, { Component, createRef } from "react";

import ItemAvatar from "./ItemAvatar";

const ItemAvatarRow = (props) => {

  const { chat={} } = props;

  const image = chat.user && chat.user.avatar || '';
  const name = chat.receiver && (chat.receiver.firstName + ' ' + chat.receiver.lastName) || '';
  const message = chat.lastMessage || '...';
  const hour = chat.lastMessageHour || '00:00';
  const isOnline = chat.isOnline ? 'active' : '';


  const onClickAction = (id) => {
    props.goToChat && props.goToChat(id);
  }

  return (
    <div className="mini-drawer-content" onClick={() => { onClickAction(chat.id) }}>
      <div className="mini-drawer-user">
        <ItemAvatar
          isOnline={isOnline}
          image={image || "http://placehold.it/80x80"}
          isChatCompany={props.isChatCompany}
        />
        <div style={{width:"80%"}}>
            <div className="chat-mini-details">
              <span style={{fontSize:"18px"}}>{name}</span>
              <span className="chat-mini-time">{hour}</span>
            </div>                
            <p style={{fontSize:"16px", color:"silver"}}>
              {message}
            </p>
        </div>
      </div>
    </div>
  );
}

export default ItemAvatarRow