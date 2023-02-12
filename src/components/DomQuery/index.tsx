import {FC} from "react"

interface IProps {
}

const DomQuery: FC<IProps> = ({}) => {

    return <div>
        <div>test1</div>
        <div>test2</div>
        <button>按钮1</button>
        <button role='tab'>自定义按钮</button>
        <button aria-pressed>pressed 按钮</button>
        <button aria-describedby="description">
            <div id="description">自定义aria按钮</div>
        </button>
        <div aria-label="test_note">test-note</div>
        {/* ================ */}

        <div>
            <label>
                testLabel
                <input/>
            </label>
        </div>
        <input placeholder='a query by placeholder'/>
        <input defaultValue="a query by value" readOnly />
        <img alt="a query by alt" />
        <span title="a query by title" ></span>

        <div data-testid="a not so good query">testid</div>
        <div data-current="a query by current">current</div>
    </div>
}

export default DomQuery