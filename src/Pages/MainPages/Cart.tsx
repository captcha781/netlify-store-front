import React, { Suspense, useEffect } from 'react'
import AppFooter from '../../Components/AppFooter'
import AppHeader from '../../Components/AppHeader'
import AppSidebar from '../../Components/AppSidebar'
import { CContainer, CSpinner } from '@coreui/react'
import CartLayout from '../../Components/Cart/CartLayout'
import { useAppState } from '../../Redux/Hook'
import Wrapper from '../../Components/Wrappers/Wrapper'

const Cart = () => {
  document.title = "KeyStone | Cart"
  const sideOpen = useAppState(state => state.common.sidebarShow)

  useEffect(() => {
    if (sideOpen) {
      const ele = document.getElementById("shrinked-custom") as HTMLDivElement
      ele.style.paddingLeft = "18em"
    }
  }, [sideOpen])
  return (

    <div>
      <AppSidebar />
      <Wrapper>
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
              <CartLayout />
            </Suspense>
          </CContainer>
        </div>
        <AppFooter />
      </Wrapper>
    </div>

  )
}

export default Cart