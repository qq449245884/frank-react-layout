import React, { ReactElement } from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './layout.scss'
import Aside from './aside'

const sc = scopedClassMaker('gu-layout')

interface Props extends React.MapHTMLAttributes<HTMLElement>{
  children: ReactElement | Array<ReactElement> 
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props
  const children = props.children as Array<ReactElement>
  const hasAside = 'length' in children
    && children.reduce((result, node) => result || node.type === Aside, false)
  return (
    <div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>
      {props.children}
    </div>
  )
}
export default Layout