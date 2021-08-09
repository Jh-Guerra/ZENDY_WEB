import React, { Component } from 'react';
import ItemAvatarRow from '../Components/ItemAvatarRow';
import { withStyles } from '@material-ui/core/styles';
import { Input, InputAdornment, Paper, Grid, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ItemAvatarNotifyRow from '../Components/ItemAvatarNotifyRow';
import { listStatusChats } from 'services/actions/ChatAction';
import NewChatCall from './NewChatCall';
import { useHistory } from 'react-router-dom';
import { showBackdrop } from 'services/actions/CustomAction';

const styles = theme => ({
  search: {
    position: 'relative',
    marginBottom: '30px',
  },
});

const CurrentChat = props => {
  const { classes = {} } = props;
  const history = useHistory();

  const [allChats, setAllChats] = React.useState([]);
  const [searchTimeout, setSearchTimeout] = React.useState(null);

  React.useEffect(() => {
    if(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token){
      onListStatusChats('');
    }   
  }, []);

  const onListStatusChats = term => {
    props.dispatch(showBackdrop(true));
    props.dispatch(listStatusChats(term, "Vigente")).then(res => {
      setAllChats(res || []);
      props.dispatch(showBackdrop(false));
    }).catch(err => props.dispatch(showBackdrop(false)));
  };

  const onSearch = term => {
    clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        onListStatusChats(term);
      }, 1000)
    );
  };

  const goToChat = (id) => {
    history.push("/chat/empresa/" + id);
  }

  return (
    <div className="mini-drawer-current-chat">
      <Grid container>
        <Grid item xs={12}>
          <NewChatCall />
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <div className="chatlist__heading">
              <span className="divider-line"></span>
              <p className="divider-content">Chats Vigentes</p>
              <span className="divider-line"></span>
            </div>
          </Grid>
          <Grid item xs={12}>
            {props.itemxx}
            <br />
          </Grid>
          <Grid item xs={12}>
            <Paper component="form">
              <Grid container direction="row">
                <IconButton style={{ marginLeft: '5px', padding: 10 }} type="button" aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  style={{ flex: 1, width: '80%' }}
                  placeholder="Buscar contactos"
                  onChange={event => onSearch(event.target.value)}
                />
              </Grid>
            </Paper>
          </Grid>
          <br />
          <Grid item xs={12}>
            <div className="chat-list-items">
              {allChats.map((chat, i) => {
                return (
                  <ItemAvatarRow
                    key={i}
                    chat={chat}
                    goToChat={goToChat}
                  />
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(CurrentChat);
