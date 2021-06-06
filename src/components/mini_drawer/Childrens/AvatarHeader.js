import React, { Component, useState, createRef, useEffect } from "react";

import Avatar from "../Components/Avatar";

 class AvatarHeader extends Component {
  messagesEndRef = createRef(null);

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    
  }
  

  render() {
    return (
        <div className="mini-drawer-content">
            <div className="mini-drawer-user">
              <Avatar
                isOnline="active"
                image="https://www.fundacionpersonasyempresas.org/wp-content/uploads/2013/10/images_curiosita_homer-2.jpg"
              />
              <div className="data">
                <p>Homero Simpons</p>
                <button style={{backgroundColor:'red'}}>Cerrar Sessión</button>
              </div>
            </div>
          </div>
    );
  }
}
export default AvatarHeader
