import React, { Component } from 'react';
import { Grid, Typography } from "@material-ui/core";
import CustomTable from 'components/CustomTable';
import { listUsers } from 'services/actions/UserAction';

class UsersPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount(){
    this.props.dispatch(listUsers()).then(res => {
      console.log("res", res)
    });
  }

  componentWillUnmount() {
    
  }

  render() {
    const columns = [
      { id: 'name', label: 'Name', minWidth: 170 },
      { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
      {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      },
      {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      },
      {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
      },
  ];

  const rows = [
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
    {name: "Edu", code: "In", pupulation: 1324171354, size: 3287263, density: 1324171354/3287263},
  ];


    return (
      <Grid container spacing={3} style={{height:'100%', justifyContent:'center'}}>
        <Grid item xs={11} style={{height:'10%', minHeight: '110px'}}>
          <Typography variant="h4" component="h4" gutterBottom>
            Usuarios
          </Typography>
        </Grid> 
        <Grid item xs={11} style={{height:'90%'}}>
          <Grid container>
            <Grid xs={12}>
              <CustomTable 
                columns={columns}
                rows={rows}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default UsersPage;
