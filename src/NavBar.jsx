import React, { Component } from 'react';
import { Menu, Input, Header } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = { activeItem: 'latest news' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <>
      <Header id='header' textAlign='center' as='h1'>
        GNOSIS
      </Header>
        <Menu secondary id='navbar'>
           <Menu.Item name='Latest News' active={activeItem === 'latest news'} onClick={this.handleItemClick} />
           <Menu.Item name='Environment' active={activeItem === 'environment'} onClick={this.handleItemClick} />
           <Menu.Item name='Medicine' active={activeItem === 'medicine'} onClick={this.handleItemClick} />
           <Menu.Item name='Outreach' active={activeItem === 'friends'} onClick={this.handleItemClick} />
           <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='Log In' active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </>
    )
  }
}