import Button from '@material-ui/core/Button'

const CommonButton = ({name, color, cb})=>{
    return(
        <Button style={{marginLeft: "10px"}} onClick={cb} variant="contained" color={color}>
            {name}
        </Button>
    )
}

export default CommonButton