import React from 'react';
import {Box, Typography,Link, Divider, Button, ListItem, List,Collapse} from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import FileCopyIcon from '@mui/icons-material/FileCopy';
const useStyles = makeStyles({
    boxItem: {
        maxWidth:'900px',
        width: '100%',
        height: '100%',
        margin:'0 auto',
    },
    linkTitle: {
        fontSize: '12px'
    },
    itemFlex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: '22px !important',
        fontWeight: '700 !important',
    },
    itemHelper: {
        margin: '50px 0px'
    },
    textBold: {
        fontSize: '18px !important',
        fontWeight: '600 !important',
    },
    buttonHelper: {
        width: '100%',
        display: 'flex !important',
        justifyContent: 'space-between !important',
        fontSize:'16px !important',
        fontWeight:'600 !important',
        textTransform: 'inherit !important',
        marginTop: '10px !important',
        padding: '10px !important',
        color: '#000 !important',
        '&.MuiButtonBase-root:hover' : {
            backgroundColor: '#cccccc42 !important',
        }
    }, 
    boxItemChild: {
        padding: '0px 10px'
    },
    boxAction: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        margin: '10px 0px 20px',
        padding:'15px 10px',
        backgroundColor: '#cccccc52',
        borderRadius: '6px'
    },
    actionFeedback:{
        backgroundColor: '#fff',
        borderRadius: '6px',
        padding: '10px',
    },
    feedbackTitle: {
        fontSize: '14px !important',
        fontWeight: '600 !important',
        marginRight: '60px !important',
    },
     iconFeeback: {
        marginRight: '6px'
     },
     button: {
        backgroundColor: '#cccccc85 !important',
        textTransform: 'inherit !important',
        color: '#000 !important',
        fontWeight: '600 !important',
     },
     listItemChild: {
        marginTop: '10px',
        listStyleType: 'auto !important',
     },
     boxChild: {
        backgroundColor: '#cccccc2e !important',
        borderRadius: '6px',
        margin: '15px 10px',
        padding: '10px'
     }
})

const ListItemHelpers = (props) => {
    const {listItemHelpers} = props;
    const classes = useStyles();
    const [showItems, setShowItems] = React.useState([]);

   const renderList = (item, type) => {
    let itemChild = type === 'item_title' ? item?.info_child : item?.text_child
    return      <Box className={classes.boxItemChild} sx={{marginTop: type === 'item_title' ? '0px' : '40px'}}>
    <Typography 
    sx={{
        marginTop: '10px',
         fontSize: type === 'item_title' ? '16px' : '20px',
     fontWeight: type === 'item_title' ? 'inherit' : '600'}}>
  {type === 'item_title' ? item?.text : item?.text_bold}
    </Typography>
  {itemChild?.length && type === 'item_title' ?
   <ul>
       {itemChild?.map((li,index) => 
       <li key={index} className={classes.listItemChild}>
          {li?.label}
          {li?.childrent ? li?.childrent?.map((ci => 
          <ul>
            <li style={{listStyleType: 'disc', marginTop: '10px'}}>{ci?.childrent_label}</li>
            </ul>)) : 
          null}
       </li>
           )}
   </ul> : type === 'item_text_bold' ? 
    itemChild?.map((li) =>
    <>
    <Typography sx={{marginTop: '10px'}}>
        {li?.label_child}
    </Typography>
    <ul>
        {li?.item_textChild?.map((tc,index) => 
          <li key={index} style={{...tc?.styleList, marginTop: '10px'}}>
            {tc?.textChild}
         </li>
        )}
    </ul>
    </>
   )
     : null}
</Box> 
   }

    const renderChildItems = (il) => {
        let openItems = showItems?.find(si => si === il?.id);

   return     <>
        <Button className={classes.buttonHelper} 
        sx={{backgroundColor: openItems ? '#8ed1fc4f' : 'transparent'}} 
        onClick={() =>
            { 
                if (openItems) {
                    setShowItems(showItems?.filter(si => si !== il.id))
                } else {
                    setShowItems(prev => [...prev, il.id])
                }
             }}>
        {il?.title_child}
        {  openItems ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />  }
        </Button>
        {openItems ? 
        <>
        {il?.box_child ? <Box className={classes.boxChild}>
            {il?.box_child}
        </Box> : null}
        {il?.item_title?.length ?il?.item_title?.map(it => 
        renderList(it, 'item_title')
        ) : null}
        {il?.item_textBold?.length ? il?.item_textBold?.map(tx =>renderList(tx, 'item_text_bold')
             ) : null}
          <Box className={classes.boxAction}>
               <Box className={classes.actionFeedback}>
                   <Box className={classes.itemFlex}>
                       <Typography className={classes.feedbackTitle}>Nội dung này có hữu ích không?</Typography>
                       <CloseIcon sx={{cursor: 'pointer'}} />
                   </Box>
                   <Box sx={{marginTop: '10px'}} className={classes.itemFlex}>
                       <Button className={classes.button} sx={{marginRight: '10px', width: '50%'}} >
                           <InsertEmoticonIcon className={classes.iconFeeback} />
                           Có
                       </Button>
                       <Button  className={classes.button} sx={{ width: '50%'}}>
                           <SentimentVeryDissatisfiedIcon className={classes.iconFeeback}  />
                           Không
                       </Button>
                   </Box>
               </Box>
               <Box>
                   <Button className={classes.button} sx={{padding: '5px 15px'}}>Xem toàn bộ bài viết</Button>
                   <Button className={classes.button} sx={{marginLeft: '10px'}}>
                       <FileCopyIcon />
                   </Button>
               </Box>
           </Box>
        </>
        : null}
        </>
    }

    const renderItems = (item)=> {
      return   <>
        <Box className={classes.itemFlex}sx={{justifyContent: 'start', padding:'10px 0px 15px'}}  >
        <Link href="#" className={classes.linkTitle} underline="hover">Sử dụng Facebook</Link>
        <NavigateNextIcon sx={{fontSize: '15px'}} />
        <Link href="#" className={classes.linkTitle} underline="hover">{item?.title}</Link>
        </Box>
        <Typography className={classes.title}>{item?.title_helper}</Typography>
        <Divider />
        {item?.list_item?.map(el => 
        <Box className={classes.itemHelper}>
            <Typography className={classes.textBold} sx={{marginBottom: '10px'}}>{el?.title_item}</Typography>
           <Box>
            {el?.item_child?.map(il => 
                renderChildItems(il)
            )}
           </Box>
        </Box>
            )}
            </>
    } 
    return <Box className={classes.boxItem}>
        {listItemHelpers?.map(item => renderItems(item)
            )}
    </Box>
}

export default ListItemHelpers;