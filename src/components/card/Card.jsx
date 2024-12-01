import style from './Card.module.css'
import image from '../../assets/31343C.svg'


function Card() {

    return (
        <>
            <main className="container">
                <div className={style.card}>
                    <div className={style.cardImg}>
                        <img className={style.image} src={image} alt="" />
                    </div>
                    <div className={style.cardBody}>
                        <div className={style.titleCard}>Title</div>
                        <div className={style.descriptionCard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, veritatis. Repudiandae pariatur voluptas corporis fugiat optio maiores eaque veritatis aut deserunt! Quibusdam, eligendi minus. Vero optio corrupti laboriosam delectus rerum?</div>
                        <button className={style.btn}>BUTTON</button>
                    </div>
                </div>
            </main>
        </>
    )
}



export default Card
