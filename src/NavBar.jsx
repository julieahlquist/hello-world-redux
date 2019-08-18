import React, { Component } from 'react';
import { Menu, Input, Header } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = { activeItem: 'latest news' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <>
      <div className='page'>
      <Header id='header' as='h1' textAlign='centered'>
        GNOSIS
      </Header>
        <Menu secondary id='navbar'>
           <Menu.Item id='latest' name='Latest Publications' active={activeItem === 'latest news'} onClick={this.handleItemClick} />
           <Menu.Item id='environment'name='Environment' active={activeItem === 'environment'} onClick={this.handleItemClick} />
           <Menu.Item id='medicine' name='Medicine' active={activeItem === 'medicine'} onClick={this.handleItemClick} />
           <Menu.Item id='outreach'name='Outreach' active={activeItem === 'friends'} onClick={this.handleItemClick} />
           <Menu.Menu position='right'>
            <Menu.Item>
              <Input id='search' icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item id='login' name='Log In' active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
        </div>
      </>
    )
  }
}