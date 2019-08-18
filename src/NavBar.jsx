import React, { Component } from 'react';
import { Menu, Input, Header } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = { activeItem: 'latest news' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <>
      <div className='background'>
      <Header id='header' textAlign='center' as='h1'>
        GNOSIS
      </Header>
        <Menu secondary id='navbar'>
           <Menu.Item className='category' name='Latest Publications' active={activeItem === 'latest news'} onClick={this.handleItemClick} />
           <Menu.Item className='category' name='Environment' active={activeItem === 'environment'} onClick={this.handleItemClick} />
           <Menu.Item className='category' name='Medicine' active={activeItem === 'medicine'} onClick={this.handleItemClick} />
           <Menu.Item className='category' name='Outreach' active={activeItem === 'friends'} onClick={this.handleItemClick} />
           <Menu.Menu position='right'>
            <Menu.Item>
              <Input className='category' id='search' icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item className='category' name='Log In' active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
        </div>
      </>
    )
  }
}