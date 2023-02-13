import {FC} from 'react'

interface IProps {
}

const DomExpect: FC<IProps> = ({}) => {

    return <div>
        <div aria-label="empty_note"></div>
        <div role="note" style={{display: "none"}} aria-hidden>
            1234
        </div>
        <div role="note">1234</div>
        {/*对于 form 元素，虽然它包含 form 角色，但是必须要加上 aria-label 才可以使用 screen.getByRole("form")进行筛选，这是一个很特殊的规则，因为 form 元素没有一个可访问的信息*/}
        <form aria-label='form'>
            <input
                type="text"
                name='username'
                disabled
                aria-disabled
                defaultValue='xiaolin'
            />
            <input type="number" name='age' defaultValue={23} required/>
            <input type="radio" name='sex' value='man' defaultChecked aria-checked/>
            <input type="radio" name='sex' value='woman'/>
        </form>
    </div>
}

export default DomExpect;