var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var Pagination = require('react-bootstrap').Pagination;
var Pager = require('react-bootstrap').Pager;


var Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    NavDropdown = ReactBootstrap.NavDropdown,
    MenuItem = ReactBootstrap.MenuItem;

var products = [{id: "Fixed Saver", 
                 name: "2.20%", 
                 price: 500,
                interestType:"Fixed"},
               {id: "Flex Saver", 
                 name: "15%", 
                 price: 0,
               interestType:"Tracker"},
               {id: "Offset Saver", 
                 name: "18%", 
                 price: 1000,
                interestType:"Fixed"}];

var AccountApplication = React.createClass({
    
    render: function(){
        return(
          <div>
            <HeaderClass />
            <SavingsTable />
            <pagerInstance />
           </div>
        );
    }
     
});

var HeaderClass = React.createClass({
    
    render: function(){
        return(
            <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Lloyds Bank</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Business</NavItem>
        <NavItem eventKey={2} href="#">Product</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Internet Banking</MenuItem>
          <MenuItem eventKey={3.2}>Mobile Banking</MenuItem>
          <MenuItem eventKey={3.3}>Other Product </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Online Chat</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Help and Others</NavItem>
        <NavItem eventKey={2} href="#">Sign-In</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        )
    }
    
});


        
//Table to create
 var SavingsTable = React.createClass({
    render: function(){
        
      return(
          <div>
          <h2>Savings Accounts</h2>
          <div className=" tablesaw tablesaw-stack" data-tablesaw-mode="stack">
           
             <BootstrapTable data={products} striped={true} hover={true}  >
              
               <TableHeaderColumn dataField="id" isKey={true}>Product </TableHeaderColumn>
               <TableHeaderColumn dataField="name">Interest rate</TableHeaderColumn>
               <TableHeaderColumn dataField="price" >Maximum Deposit</TableHeaderColumn>
               <TableHeaderColumn dataField="interestType">Interest Type</TableHeaderColumn>
             </BootstrapTable>
          </div>
          </div>
                
            );
        },

    });

const pagerInstance = (
  <Pager>
    <Pager.Item href="#">Previous</Pager.Item>
    {' '}
    <Pager.Item href="#">Next</Pager.Item>
  </Pager>
);


ReactDOM.render(<AccountApplication/>,document.getElementById('app'));



