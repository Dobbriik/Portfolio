import style from './arts.module.css'

function Arts() {
	const arrAtrs = ['art1.png', 'art2.png', 'art3.png', 'art4.png']
	const arts = arrAtrs.map((img, i) => (
		<img key={i} src={`./arts/${img}`} className={style.art} alt={img} />
	))

	return <div className={style.wrap}>{arts}</div>
}

export default Arts
