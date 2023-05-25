import React from 'react'
import Service from '../common/Service'

const Dummy = () => {
    const instance = new Service({resourceType:'vehiclemake'})
    instance.list().then(a => console.log(a.data.item))
  return (
    <div>
    Dummy
    </div>
  )
}

export default Dummy