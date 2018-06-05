import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Components
import Home from '../../components/home/'

//  <button onClick={() => props.changePage()}>Go to about page via redux</button>

const HomeContainer = props => {
  console.log('Container props: ', props)
  return (
    <Home {...props}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return{
    home : state.home
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  goToHome: () => push('/'),
  goToSignUp: () => push('/signup'),
  goToLogIn: () => push('/login')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomeContainer)