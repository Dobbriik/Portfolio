import style from './component.module.css'

function Container({ children }) {
	return <div className={style.cont}>{children}</div>
}

export default Container
