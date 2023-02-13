/**
 * UI 组件库测试用例
 */
import {FC} from "react"
import {Form} from "@douyinfe/semi-ui"

interface IProps {
}

const DomUi: FC<IProps> = ({}) => {
    return (<Form initValues={{
        username: 'xiaolin',
        age: 23,
        sex: 'man',
        hobby: 'code',
    }} aria-label={'semi-form'}>
        <Form.Input field={'username'} disabled name={'username'}/>
        <Form.InputNumber field={'age'} required name={'age'}/>
        <Form.RadioGroup field={'sex'} name={'sex'}>
            <Form.Radio value={'man'}></Form.Radio>
            <Form.Radio value={'woman'}></Form.Radio>
        </Form.RadioGroup>
        <Form.Select field='hobby' name={'hobby'}>
            <Form.Select.Option value={'code'}>code</Form.Select.Option>
            <Form.Select.Option value={'read'}>read</Form.Select.Option>
        </Form.Select>
    </Form>)
}

export default DomUi