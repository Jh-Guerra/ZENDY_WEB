import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ChatAvatar from "pages/main_page/Components/ChatAvatar";
import Box from '@material-ui/core/Box';
import { confirmError, deleteError, fakeError, findError, listErrors, listErrorsByUser } from 'services/actions/ErrorAction';
import { showBackdrop, showSnackBar } from 'services/actions/CustomAction';
import { useHistory } from 'react-router';
import config from "../../config/Config";
import defaultImage from 'assets/images/defaultImage.png';
import { Avatar } from '@material-ui/core';
import { getImageProfile, getSessionInfo, isClientUser } from 'utils/common';
import GetAppIcon from '@material-ui/icons/GetApp';
import CustomModal from 'components/Modals/common/CustomModal';
import ModalDelete from 'components/Modals/ModalDelete';
import ModalFakeError from 'components/Modals/ModalFakeError';
import ModalConfirmError from 'components/Modals/ModalConfirmError';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({

  root: {
    height: '100vh',
  },
  form: {
    width: '80%',
    height: '100%'
  },
  reportBtn: {
    fontSize: '15px',
    width: '200px',
    height: '50px',
    borderRadius: '20px',
    backgroundColor: '#6D909B',
    color: '#ffff'
  },
  nameHeader: {
    fontSize: '30px',
  },
  containerReport: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '610px',
    width: '82%',
    paddingTop: '40px',
    minWidth: '82%',
    minHeight: '610px'
  },
  fontError: {
    color: '#000000',
    marginTop: '20px',
    alignItems: 'center',
    fontSize: '20px',
  },
  fontDescription: {
    color: '#000000',
    marginTop: '20px',
    alignItems: 'center',
    fontSize: '17px',
  },
  headerName: {
    width: '100%',
    backgroundColor: '#303e7a',
    color: 'white',
    height: '130px',
    justifyContent: 'center'
  },
  imageError: {
    height: '300px',
    width: '708px',
    border: '2px solid #ebe7fb'
  },
  containerImage: {
    marginTop: '80px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageErrorS: {
    height: '300px',
    width: '340px',
    border: '2px solid #ebe7fb'
  }
}));

const ErrorInfoPage = props => {
  const session = getSessionInfo();
  const classes = useStyles();
  const history = useHistory();
  const [modulo, setModulo] = React.useState('');
  const [error, setError] = React.useState({});
  const [showReportedErrorModal, setShowReportedErrorModal] = React.useState(false);
  const [showModalDelete, setShowModalDelete] = React.useState(false);
  const [showFakeError, setShowFakeError] = React.useState(false);
  const [showConfirmError, setShowConfirmError] = React.useState(false);
  const [showNewCompanyNotification, setShowNewCompanyNotification] = React.useState(false);
  const isClient = isClientUser(session.role);
  const isTheCreator = ((session.user && session.user.id) == (error.user && error.user.id)) ? true : false

  React.useEffect(() => {
    if (props.location.pathname) {
      const pathArray = props.location.pathname.split("/");
      const errorId = pathArray && pathArray[2];
      if (errorId) {
        onGetErrorData(errorId);
      } else {
        history.push("/");
      }
    }
  }, [props.location.pathname]);

  const onGetErrorData = (errorId) => {
    props.dispatch(showBackdrop(true));
    props.dispatch(findError(errorId)).then(res => {
      setError(res.error || {});
      props.dispatch(showBackdrop(false));
    }).catch(err => props.dispatch(showBackdrop(false)));
  }

  const onDelete = () => {
    props.dispatch(showBackdrop(true));
    props.dispatch(deleteError(error.id)).then(res => {
      setShowModalDelete(false)
      setError({})
      props.dispatch(showSnackBar("success", res && res.success || ""));
      props.dispatch(showBackdrop(false));
      if (isClient) {
        props.dispatch(listErrorsByUser(""));
      } else {
        props.dispatch(listErrors(""));
      }
      history.push("/inicio");
    }).catch(error => {
      props.dispatch(showBackdrop(false));
    });
  }

  const onFakeError = () => {
    props.dispatch(showBackdrop(true));
    props.dispatch(fakeError(error.id)).then(res => {
      setShowFakeError(false)
      setError({})
      props.dispatch(showSnackBar("success", res && res.success || ""));
      props.dispatch(showBackdrop(false));
      if (isClient) {
        props.dispatch(listErrorsByUser(""));
      } else {
        props.dispatch(listErrors(""));
      }
      history.push("/inicio");
    }).catch(error => {
      props.dispatch(showBackdrop(false));
    });
  }

  const onConfirmError = () => {
    props.dispatch(showBackdrop(true));
    props.dispatch(confirmError(error.id)).then(res => {
      setError(res.error)
      setShowConfirmError(false)
      props.dispatch(showSnackBar("success", "Error Aceptado"));
      props.dispatch(showBackdrop(false));
      if (isClient) {
        props.dispatch(listErrorsByUser(""));
      } else {
        props.dispatch(listErrors(""));
      }
    }).catch(error => {
      props.dispatch(showBackdrop(false));
    });
  }

  const handleChange = (event) => {
    setModulo(event.target.value);
  };

  const showEditError = () => {
    setShowReportedErrorModal(true)
  }

  const showDeletedError = () => {
    setShowModalDelete(true)
  }

  const ShowFakeError = () => {
    setShowFakeError(true)
  }

  const ShowConfirmError = () => {
    setShowConfirmError(true)
  }

  const ShowNewCompanyNotification = () => {
    setShowNewCompanyNotification(true)
  }
  return (
    <>
      <CssBaseline />
      <Grid container className={classes.root}>
        <Grid item xs={12} className="report-form">
          <Grid container className={classes.headerName} direction="column" justifyContent='center'
            alignItems='center' style={{ textAlign: "center" }}>
            <div >
              <Grid containter style={{ display: "flex" }} justifyContent='center'
                alignItems='center'>
                <Grid item xs={6}>
                  <ChatAvatar
                    isOnline="active"
                    image={error.company && error.company.avatar ? config.api + error.company.avatar : getImageProfile("Company")}
                    imgClassName="avatar-header"
                  />
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: '0px' }}>
                  <span className={classes.nameHeader}>{error.company && error.company.name || ""}</span>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} alignItems='center' alignContent='center' style={{ textAlign: "center", marginTop: '20px' }}>
            <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', alignItems: 'flex-end' }} >Estado: </span>
            {
              !isClient ?
                <span className={classes.fontError} style={{ alignItems: 'flex-center', marginTop: '10px' }}>{(error.status == "Pending") ? "Pendiente" : "Aceptado"}</span> :
                <span className={classes.fontError} style={{ alignItems: 'flex-center', marginTop: '10px' }}>{error.fake ? "El error reportado ha considerado como Fake" : ((error.status == "Pending") ? "Pendiente" : ((error.status == "Solved") ? "El error notificado ya fue resuelto" : "Aceptado"))}</span>
            }

          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={6} container spacing={0} direction="column" alignItems="flex-start" verticalAlign="center" justify="flex-start">
              <Box style={{ margin: '40px 80px' }}>
                <Grid item xs={12} alignItems='center' alignContent='center' style={{ textAlign: "center", marginTop: '10px' }}>
                  <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline', alignItems: 'center', marginTop: '10px', marginLeft: '30px' }} >INFORMACIÓN DEL REPORTE</span>
                </Grid>

                <Grid item xs={12} alignItems='flex-start' alignContent='flex-start' style={{ textAlign: "left", marginTop: '15px' }}>
                  <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', alignItems: 'flex-end', marginTop: '10px' }} >Nombre de Empresa: </span>
                  <span className={classes.fontError} style={{ alignItems: 'flex-start', marginTop: '10px' }}>{error.company && error.company.name || ""}</span>
                </Grid>

                <Grid item xs={12} alignItems='flex-start' alignContent='flex-start' style={{ textAlign: "left", marginTop: '15px' }}>
                  <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', alignItems: 'flex-end' }} >Usuario: </span>
                  <span className={classes.fontError} style={{ alignItems: 'flex-start', marginTop: '10px' }}>{error.company && error.user.firstName + " " + error.user.lastName || ""}</span>
                </Grid>

                <Grid item xs={12} alignItems='flex-start' alignContent='flex-start' style={{ textAlign: "left", marginTop: '15px' }}>
                  <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', alignItems: 'flex-end' }} >Fecha de Reporte: </span>
                  <span className={classes.fontError} style={{ alignItems: 'flex-start', marginTop: '10px' }}>{(error.created_at) && moment().format("DD/MM/YYYY") || ""}</span>
                </Grid>

                <Grid item xs={12} alignItems='flex-start' alignContent='flex-start' style={{ textAlign: "left", marginTop: '15px' }}>
                  <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', alignItems: 'flex-end' }} >Modulo: </span>
                  <span className={classes.fontError} style={{ alignItems: 'flex-start', marginTop: '10px' }}>{error.module && error.module.name || ""}</span>
                </Grid>

                <Grid item xs={12} alignItems='flex-start' alignContent='flex-start' style={{ textAlign: "left", marginTop: '15px' }}>
                  <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', alignItems: 'flex-end' }} >Asunto: </span>
                  <span className={classes.fontError} style={{ alignItems: 'flex-start', marginTop: '10px' }}>{error.reason || ""}</span>
                </Grid>

                <Grid item xs={12} alignItems='flex-start' alignContent='flex-start' style={{ textAlign: "left", marginTop: '15px' }}>
                  <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', alignItems: 'flex-end' }} >Descripción: </span>
                  <span className={classes.fontDescription} style={{ alignItems: 'flex-start', marginTop: '10px' }}>{error.description || ""}</span>
                </Grid>

                {
                  error.file &&
                  <Grid item xs={12} alignItems='flex-start' alignContent='flex-start' style={{ textAlign: "left", marginTop: '15px' }}>
                    <span className={classes.fontError} style={{ fontWeight: 'bold', fontStyle: 'italic', alignItems: 'flex-end' }} >Archivo Adjunto:</span>
                    <GetAppIcon style={{ marginLeft: "30px" }} />
                  </Grid>
                }

                <Grid container direction="row" style={{ marginTop: '20px' }}>
                  {
                    (isClient && isTheCreator && (error.status == "Pending") && !error.fake) &&
                    <>
                      <Grid item xs={6}>
                        <Button className={classes.reportBtn} onClick={() => { showEditError() }}>Editar</Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button className={classes.reportBtn} onClick={() => { showDeletedError() }}>Eliminar</Button>
                      </Grid>
                    </>
                  }
                  {
                    (!isClient && error.status == "Accepted" ) &&
                    <>
                      <Grid item>
                        <Button className={classes.reportBtn} onClick={() => { ShowNewCompanyNotification() }}>Notificar Error Reportado</Button>
                      </Grid>
                    </>
                  }
                  {
                    (!isClient && (error.status != "Accepted")) &&
                    <>
                      <Grid item xs={6}>
                        <Button className={classes.reportBtn} onClick={() => { ShowConfirmError() }}>Confirmar error</Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button className={classes.reportBtn} onClick={() => { ShowFakeError() }}>Reportar error falso</Button>
                      </Grid>
                    </>
                  }
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={6} direction="row" alignItems="center" justify="center">
              <Box
                m={5}
                justifyContent='center'
                alignItems='center'
                style={{ textAlign: "center" }}>
                <Avatar
                  variant="rounded"
                  style={{ height: "60vh", width: "60vh", }}
                  src={error.image ? (config.api + error.image) : defaultImage}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CustomModal
        customModal={'ModalReportedErrors'}
        open={showReportedErrorModal}
        handleClose={() => setShowReportedErrorModal(false)}
        error={error}
        onGetErrorData = {onGetErrorData}
      />
      <CustomModal
        customModal="ModalNewCompanyNotification"
        open={showNewCompanyNotification}
        companyIdError={error.idCompany}
        ErrorId={error.id}
        handleClose={() => { setShowNewCompanyNotification(false); }}
      />
      <ModalConfirmError
        open={showConfirmError}
        handleClose={() => setShowConfirmError(false)}
        onConfirm={onConfirmError}
      />
      <ModalFakeError
        open={showFakeError}
        handleClose={() => setShowFakeError(false)}
        onConfirm={onFakeError}
      />
      <ModalDelete
        open={showModalDelete}
        title="Eliminar Error Reportado"
        handleClose={() => setShowModalDelete(false)}
        onDelete={onDelete}
      />
    </>
  );
}

export default ErrorInfoPage;