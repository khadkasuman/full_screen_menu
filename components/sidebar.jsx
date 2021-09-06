
import menuStyle from '../styles/Menu.module.css'
import { Button, Drawer, Row, Space } from 'antd'
import { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'


export default function SideBar() {
    const [visible, setVisibility] = useState(false)
    return <>
        <Row justify="center">
            <div>
                <Button type="dashed" onClick={() => { setVisibility(true) }}> Open Menu</Button>
            </div>
        </Row>
        <Drawer headerStyle={{ backgroundColor: "#b70950", borderBottom: "0px" }} drawerStyle={{ backgroundColor: "#b70950" }} visible={visible} onClose={() => { setVisibility(false) }}>
            <Space direction="vertical" size="large">
                
                {
                    [...Array(10)].map((e, i) => <Row key={i}>
                        <Button type="text" className={menuStyle.h1}>Link {i}</Button>
                    </Row>)
                }
            </Space>
        </Drawer>

    </>
}