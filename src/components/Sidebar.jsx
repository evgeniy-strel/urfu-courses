import React from "react";
import styled from "@emotion/styled";
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';


export default function CourseBar() {
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar>
                <Menu renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}>
                    <SubMenu label="1 Курс">
                        <MenuItem> 1 Семестр</MenuItem>
                        <MenuItem> 2 Семестр</MenuItem>
                    </SubMenu>
                    <SubMenu label="2 Курс">
                        <MenuItem> 3 Семестр</MenuItem>
                        <MenuItem> 4 Семестр</MenuItem>
                    </SubMenu>
                    <SubMenu label="3 Курс">
                        <MenuItem> 5 Семестр</MenuItem>
                        <MenuItem> 6 Семестр</MenuItem>`
                    </SubMenu>
                    <SubMenu label="4 Курс">
                        <MenuItem> 7 Семестр</MenuItem>
                        <MenuItem> 8 Семестр</MenuItem>
                    </SubMenu>

                </Menu>
            </Sidebar>
        </div>
    );
}