import React from 'react'

class ClassComponent extends React.Component {
  stringfiedProps: string
  constructor(props) {
    super(props)
    this.stringfiedProps = JSON.stringify(this.props)
  }

  render() {
    return <div>{this.stringfiedProps}</div>
  }
}

export default ClassComponent