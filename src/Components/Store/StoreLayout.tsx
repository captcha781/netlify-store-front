import React, { useEffect } from 'react'
import Sorter from './Modifiers/Sorter'
import Filter from './Modifiers/Filter'
import { useAppDispatch, useAppState } from '../../Redux/Hook'
import axios from 'axios'
import Card from './Cards/Card'
import { initialize } from '../../Redux/Slices/ProductSlice'
import Search from './Modifiers/Search'


const StoreLayout = () => {
  
  const modifiers = useAppState(state => state.common.modifiers)
  
  const dispatch = useAppDispatch()
  useEffect(() => {
    axios.post(`/product/allproducts?rangestart=${modifiers.rangestart}&rangeend=${modifiers.rangeend}&sortby=${modifiers.sortby}&search=${modifiers.search}`, { category: modifiers.category })
    .then(prodFetchResponse => {
        console.log("Fetch again");
        dispatch(initialize(prodFetchResponse.data.products))
      })
  }, [dispatch, modifiers.category, modifiers.rangeend, modifiers.rangestart, modifiers.search, modifiers.sortby])

  const products = useAppState(state => state.product.products)
  localStorage.removeItem("entryurl")
  return (
    <div className='tw-w-full'>
      {/* Filter and Sorter */}
      <div className='tw-grid tw-grid-cols-2 md:tw-grid-cols-6 lg:tw-flex tw-w-full tw-justify-between lg:tw-gap-8 tw-p-3'>
        <Sorter />
        <Search />
        <Filter />
      </div>
      <div className='tw-px-3 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-2 md:tw-gap-3 lg:tw-gap-4'>
        {products?.length as number > 0 ? <>
          {products?.map(product => <Card key={product._id} product={product} />)}
        </> : <h1>No Products Found</h1>}
      </div>
    </div>
  )
}

export default React.memo(StoreLayout)