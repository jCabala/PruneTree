import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import get from 'lodash.get'

import Loading from '../../Loading'
import Tree from '../Tree'

export default ({ match: { params: { treeId } } }) => {
  const [loading, setLoading] = useState(true)
  const [tree, setTree] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/published/${treeId}`)
      .then((response) => {
        const tree = get(response, 'data')

        setTree(tree)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        toast.error(get(error, 'response.data.errors[0].detail', 'Unknown error occurred'), { autoClose: false })
      })
  }, [treeId])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <Tree
        tree={tree}
        people={get(tree, 'people', [])}
        readonly
        loading={loading}
      />
    </div>
  )
}
