import React ,{ useState } from 'react';
import { Button } from 'antd';
import { DatePicker } from 'antd';




function ButtonStyle() {
    return  <div className="App">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>


           </div>


}


export default ButtonStyle;