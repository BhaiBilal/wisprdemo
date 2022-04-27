import Access from '../../components/AccessScreenComponent/AccessScreenComponent';
import classes from '../../styles/AccessScreen.module.scss';



const AccessScreen = () => {
  return (
    <div className={classes.access_screen}>
        <Access path='/'></Access>
    </div>
  )
}

export default AccessScreen;