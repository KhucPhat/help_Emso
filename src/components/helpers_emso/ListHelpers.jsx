import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia,
     Divider, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyles = makeStyles({
    boxBanner: {
        backgroundImage: 'linear-gradient(to bottom, #1877F2, 30%, #fff)',
        height: '300px',
    },
    imageBanner: {
        width: '80%',
        height: '50%',
        marginTop:'70px',
        objectFit: 'cover'
    },
    imageHelper:{
        width: '50%',
        height: '100%',
        margin: '0px auto',
        position: 'relative',
        backgroundColor: '#1877F2',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        textAlign: 'center',

    },
    textBanner: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom:'0',
        paddingBottom: '30px'
    },
    title: {
        fontSize: '22px !important',
        fontWeight: 'bold !important',
        color: '#fff',
        marginLeft: '40px !important',
    },
    buttonCopy: {
        backgroundColor: '#fff !important',
        marginRight: '30px !important',
        width: '180px',
        height: '36px',
        borderRadius: '10px !important',
        textTransform: 'inherit !important',
        fontWeight: '600 !important',
    },
    content: {
        width: '50%',
        margin: '0px auto',
        padding: '20px 0px 120px'
    },
    linkTitle: {
        display: 'inherit !important',
        fontSize: '17px',
        fontWeight: '500 !important',
        marginTop:' 5px !important',
        cursor: 'pointer'
    },
    boxLink: {
        marginTop: '20px' 
    },
    cardAction: {
        backgroundColor: '#ccc'
    },
    cardMedia: {
        width: '50% !important',
        margin: '40px auto 0px'
    },
    titleBold: {
        fontSize: '20px !important',
        fontWeight: '600 !important',
    },
    lineClamp: {
        display: '-webkit-box',
        '-webkit-line-clamp': '3',
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
    },
   listItem: {
    listStyleType: 'disc',
    marginTop: '10px'
    },
    boxHelper: {
        backgroundColor: '#f0f2f5',
        borderRadius: '8px',
        padding: '10px',
        margin: '25px 0px'
    }
})

const ListHelper = (props) => {
    const {listHelpers} = props
    const classes = useStyles()
    return <Box>
       {listHelpers?.map((item, index) => 
        <Box key={index}>
        <Box className={classes.boxBanner}>
            <Box className={classes.imageHelper}>
            <img className={classes.imageBanner} src={item.banner} alt='banner' />
            <Box className={classes.textBanner}>
            <Typography className={classes.title}>{item.title}</Typography>
            <Button  startIcon={<FileCopyIcon  />} className={classes.buttonCopy}>
                 Sao chép liên kết
            </Button>
            </Box>
            </Box>
        </Box>
        <Box className={classes.content}>
            <Box className={classes.subText}>
                {item?.boxHelper ? <Box className={classes.boxHelper}>{item?.boxHelper}</Box> : null}
                {item.subText.map(el => <>
                    <Typography sx={{marginTop: '15px', fontSize: el?.label_bold ? '20px' :'16px', fontWeight: el?.label_bold ? 'bold' : 'normal' }}>
                        {el?.label_bold ? el?.label_bold :el.label}</Typography>
                    {el?.subLabel ? 
                    <ul>
                        {el.subLabel?.map((li,index) => 
                        <li key={index} className={classes.listItem}>
                            {li.sb_label}
                        </li>
                            )}
                    </ul> 
                    : null}
                    </>)}
            </Box>
            <Divider sx={{margin: '40px 0px'}} />
            <Box className={classes.subTitle}>
                <Typography className={classes.titleBold}>Bài viết phổ biến</Typography>
                <Box className={classes.boxLink}>
                    {item.subTitle.map(il =>  <Link href="#" className={classes.linkTitle} underline="hover">{il.sb_title}</Link> )}
                </Box>
            </Box>
            <Divider sx={{margin: '40px 0px'}} />
            <Box className={classes.boxCard}>
                <Typography className={classes.titleBold}>
                    Chủ đề liên  quan
                </Typography>
                <Grid container spacing={3}>
                {item.subCard.map(im => 
                    <Grid item xs={4}>

                <Card sx={{  marginTop: '10px', backgroundColor: '#f0f2f5' }}>
      <CardActionArea className={classes.cardAction}>
        <CardMedia
          component="img"
          height="140"
          image={im.icon}
          alt="green iguana"
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '18px', fontWeight: '600'}}>
         {im.title_card}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.lineClamp}>
{
    im.sub_card
}          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                    </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
        </Box>
       )}
    </Box>
}

export default ListHelper;