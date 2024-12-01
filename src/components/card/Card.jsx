import style from './Card.module.css'
import image from '../../assets/31343C.svg'

function Card(props) {

    return (
        <>
            <main className="container">
                <div className={style.card}>
                    <div className={style.cardImg}>
                        <img className={style.image} src={image} alt="" />
                    </div>
                    <div className={style.cardBody}>
                        <div className={style.titleCard}>{props.title}</div>
                        <div className={style.descriptionCard}>{props.content}</div>
                        <div>{props.tags.join(', ')}</div>
                        <button className={style.btn}>BUTTON</button>
                    </div>
                </div>
            </main>
        </>
    )
}



export default Card
