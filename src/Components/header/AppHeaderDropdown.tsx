import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  // cilCreditCard,
  // cilCommentSquare,
  cilEnvelopeOpen,
  // cilFile,
  // cilLockLocked,
  // cilSettings,
  // cilTask,
  // cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
// import { useAppState } from '../../Redux/Hook'
import { ProfileOutlined } from '@ant-design/icons'

const CDropdownToggleCustom = CDropdownToggle as any

const AppHeaderDropdown = () => {
  // const auth = useAppState(state => state.user.auth)
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggleCustom placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={"/assets/profile.jpg"} size="md" />
      </CDropdownToggleCustom>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Cart
          <CBadge color="info" className="ms-2">
            4
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Orders
          <CBadge color="success" className="ms-2">
            33
          </CBadge>
        </CDropdownItem>
        
        <CDropdownDivider />
        <CDropdownItem href="#" className='tw-flex tw-items-center'>
          <ProfileOutlined className="me-2 tw-text-gray-700" />
          Profile
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
