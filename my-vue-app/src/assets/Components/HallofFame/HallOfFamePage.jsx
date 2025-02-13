import './HallofFame.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';
import { useState } from 'react';

function ListBlockItem({ imgSrc, title, position, linkToSite }) {
    const Item = styled(Paper)({
        backgroundColor: 'rgb(17, 50, 91)',  // Set the background color directly
        textAlign: 'center',
        color: 'white',
        minWidth: '160px',
        maxWidth: '310px',
        width: '100%',
        fontSize: '10px',
        padding:'3px',
    marginTop:'30px',
      });
      
      const [tapCount, setTapCount] = useState(0);

      const handleImageTap = () => {
        // Check if the tapped image is the specific person's image
        if (title === 'Rubben Debrah') {
          setTapCount((prevCount) => prevCount + 1);
    
          if (tapCount + 1 === 10) {
            alert(``);
            // Reset tap count after displaying the message
            setTapCount(0);
          }
        }
      };
    return (
     <Box>
     <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 2 }} >
         <Grid xs={4} sm={4} md={4}  style={{ display: 'flex', justifyContent: 'center', position: 'relative',  }}>
           <Item onClick={handleImageTap}>
             <div style={{ position: 'relative', borderBottom: '2px solid #34495e', zIndex: '1', }}>
               <img
                 src={imgSrc} className="image-fit-contain" alt="img"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
 <figcaption style={{ backgroundColor: 'rgb(17, 50, 91)', padding: '01px' }}>
                  <h3
                    style={{
                      margin: '0 0 5px',
                      textTransform: 'uppercase',
                      fontWeight: '400',
                      textAlign: 'center',
                      marginTop: '10px',
                      marginBottom: '10px',
                      color: 'white',
                      fontSize: 'small',
                    }}
                  >
                    {title}
                    <br />
                    <span style={{ fontWeight: '700' }}> {position}</span>
                    <br />
                    {linkToSite && <a href={linkToSite} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Visit</a>}
                  </h3>
                  
                </figcaption>
             </div>
           </Item>
         </Grid>
       
     </Grid>
   </Box>
  );
}



// ... (imports and ListBlockItem component)
function HallOfFamePage() {
    const itemsData = [
      //2024/2025 Executives
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428157/HallofFame/IMG-20250103-WA0060_natdw1.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1736444017/HallofFame/IMG-20250103-WA0044_lwcxkk.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428160/HallofFame/IMG-20250103-WA0056_m69j1k.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428157/HallofFame/IMG-20250103-WA0059_gfzpkj.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428156/HallofFame/IMG-20250103-WA0057_z1vlkv.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428160/HallofFame/IMG-20250103-WA0054_lchz3r.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428160/HallofFame/IMG-20250103-WA0053_aeyui8.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428157/HallofFame/IMG-20250103-WA0058_cksrlk.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428155/HallofFame/IMG-20250103-WA0048_e32jov.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428156/HallofFame/IMG-20250103-WA0055_qdyst9.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428154/HallofFame/IMG-20250103-WA0047_i9rucu.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428154/HallofFame/IMG-20250103-WA0051_s6jypk.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428153/HallofFame/IMG-20250103-WA0046_tifnmd.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428155/HallofFame/IMG-20250103-WA0052_qwobrr.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428152/HallofFame/IMG-20250103-WA0045_omroff.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428152/HallofFame/IMG-20250103-WA0043_cedetr.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428152/HallofFame/IMG-20250103-WA0050_lvqbm9.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428152/HallofFame/IMG-20250103-WA0049_psav3v.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737428150/HallofFame/IMG-20250103-WA0042_njahlz.jpg', category: '2024/2025 Executives', Name: '', Position: '' },
        




      // 2023/2024 Executives
      { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1737429734/HallofFame/IMG_9556_xkp63j.jpg', category: '2023/2024 Executives', Name: 'Dennis Asare', Position: 'President' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341045/HallofFame/Jeremiah_Ampah_mllnrz.jpg', category: '2023/2024 Executives', Name: 'Jeremiah Ampah', Position: 'Vice President' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341042/HallofFame/Naomi_Nartey_Mateykie_vy2guc.jpg', category: '2023/2024 Executives', Name: 'Naomi Nartey Mateykie', Position: 'General Secretary' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341046/HallofFame/Frimpong_Eric_Osei_sojptm.jpg', category: '2023/2024 Executives', Name: 'Frimpong Eric Osei', Position: 'Financial Secretary' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341043/HallofFame/Bernice_Afi_Agbanyo_tvrfzw.jpg', category: '2023/2024 Executives', Name: 'Bernice Afi Agbanyo', Position: 'Wocom' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341041/HallofFame/Mohammed_Umar_Nadra_loetbw.jpg', category: '2023/2024 Executives', Name: 'Mohammed Umar Nadra', Position: 'Organising Secretary' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341038/HallofFame/wocom1_czbvc6.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341037/HallofFame/wocom2_mli4nj.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc:'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341038/HallofFame/wocom3_z96gnx.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341050/HallofFame/academic_xi5qhf.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341034/HallofFame/judiciary_cm0hhb.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341049/HallofFame/electorial_wpylrf.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341049/HallofFame/electorial2_sa5dfg.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341048/HallofFame/electorial3_lqjswq.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341035/HallofFame/sports_ojjeuf.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341027/HallofFame/sports2_xzwces.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341034/HallofFame/public_ldcrbh.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341034/HallofFame/sponsorship_tdjihc.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341049/HallofFame/christian_bzaizu.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341037/HallofFame/islamic_liwugp.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341041/HallofFame/organizing_dtunin.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341048/HallofFame/electorial3_lqjswq.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341049/HallofFame/electorial2_sa5dfg.jpg', category: '2023/2024 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703358003/HallofFame/treasurer.jpg', category: '2023/2024 Executives', Name: '', Position: '' },


// 2022/2023 Executives
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341042/HallofFame/Christian_Kerker_pobbf2.jpg', category: '2022/2023 Executives', Name: 'Christian Kerker', Position: 'President' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341043/HallofFame/Kenseng_Mintah_vice_vsqzsc.jpg', category: '2022/2023 Executives', Name: 'Kenseng Mintah', Position: 'Vice President' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341024/HallofFame/Ishmael.jpg', category: '2022/2023 Executives', Name: 'Ishmael Aidoo', Position: 'Organizing Secretary' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341033/HallofFame/idayatu.jpg', category: '2022/2023 Executives', Name: 'Idayatu Haruna', Position: 'General Secretary' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341025/HallofFame/amanda.jpg', category: '2022/2023 Executives', Name: 'Amanda Obeng', Position: 'Women`s Commissioner' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341026/HallofFame/stephen.jpg', category: '2022/2023 Executives', Name: 'Stephen Ampomah Kuglenu', Position: 'Financial Secretary' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341035/HallofFame/judicial%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341024/HallofFame/editorial%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341028/HallofFame/academic%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341036/HallofFame/independent%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341037/HallofFame/electorial%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341038/HallofFame/christian%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341037/HallofFame/entertainment%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341035/HallofFame/public%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341034/HallofFame/islamic%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341032/HallofFame/welfare%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341025/HallofFame/wocom%202023.jpg', category: '2022/2023 Executives', Name: '', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341025/HallofFame/audit%202023.jpg', category: '2022/2023 Executives',},


    // 2021/2022 Executives
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341046/HallofFame/Kwame_Bonsu_art2oi.jpg', category: '2021/2022 Executives', Name: 'Kwame Bonsu', Position: 'President' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341043/HallofFame/Grace_Abena_Bossman_pgbsjx.jpg', category: '2021/2022 Executives', Name: 'Grace Abena Bossman', Position: 'General Secretary' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341028/HallofFame/Fiahagbe.jpg', category: '2021/2022 Executives', Name: 'Fiahagbe Atsu Emmanuel', Position: 'Organising Sec' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341028/HallofFame/Hamza.jpg', category: '2021/2022 Executives', Name: 'Hamza Gariba Mawadda', Position: 'Women`s Commissioner' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341030/HallofFame/Baniba.jpg', category: '2021/2022 Executives', Name: 'Baniba Eli Kwame', Position: 'Financial Sec' },


// lectures
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341045/HallofFame/WinstonL.jpg', category: 'Lecturers', Name: 'Prof. Winston Kwame Abroampa',  Position: 'Dean of Faculty of Education' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341045/HallofFame/SwanzyL.jpg', category: 'Lecturers', Name: 'Dr Patrick Swanzy', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341026/HallofFame/FrancisL.jpg', category: 'Lecturers', Name: 'Dr Francis Kwadwo Awuah', Position: 'Head of Department' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341045/HallofFame/EnuL.jpg', category: 'Lecturers', Name: 'Dr Justice Enu', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341046/HallofFame/SamuelL.jpg', category: 'Lecturers', Name: 'Dr Samuel Antwi', Position: 'STS Coordinator' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341026/HallofFame/PatrickL.jpg', category: 'Lecturers', Name: 'Prof. Patrick Osie-Poku', Position: 'STS Coordinator' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341038/HallofFame/AkwasiL.jpg', category: 'Lecturers', Name: 'Prof. Akwasi Acheamphong', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341038/HallofFame/LydiaL.jpg', category: 'Lecturers', Name: 'Mrs Lydia Acheampong', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341038/HallofFame/IMG-20231223-WA0006_yipte7.jpg', category: 'Lecturers', Name: 'Dr Paa Kwame Baah', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341044/HallofFame/IMG-20231223-WA0007_uutakx.jpg', category: 'Lecturers', Name: 'Dr Obed Nii Broohm', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341044/HallofFame/IMG-20231223-WA0010_qe3ok4.jpg', category: 'Lecturers', Name: 'Dr Richard Amoako', Position: 'Department Examination Officer' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341044/HallofFame/IMG-20231223-WA0008_ikggw7.jpg', category: 'Lecturers', Name: 'Dr Patricia Gustafson Asamoah', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341045/HallofFame/IMG-20231223-WA0009_m2wdpj.jpg', category: 'Lecturers', Name: 'Dr Linus Kweku Labik', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341045/HallofFame/IMG-20231223-WA0013_o06sha.jpg', category: 'Lecturers', Name: 'Dr Mrs Rebecca Essel', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341046/HallofFame/IMG-20231223-WA0011_gpjxfg.jpg', category: 'Lecturers', Name: 'Dr Prince Edem Dzakpasu', Position: '' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341046/HallofFame/IMG-20231223-WA0012_qhiblh.jpg', category: 'Lecturers', Name: 'Ohemaa Saguwaah Yeboah', Position: '' },



// Remarkable people
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341041/HallofFame/Rubben_fmuzzl.jpg', category: 'Trailblazers', Name: 'Rubben Debrah', Position: 'FESSA Web Developer' },
      { imgSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703341040/HallofFame/Shadrack_e3wfib.jpg', category: 'Trailblazers', Name: 'Duah Shadrack Amponsah', Position: 'FESSA Website Admin' },

      // Add more categories and items as needed
    ];
  
    const categoryItemsMap = {};

  itemsData.forEach((item) => {
    const { category, Name } = item;

    if (!categoryItemsMap[category]) {
      categoryItemsMap[category] = [];
    }

    categoryItemsMap[category].push({ Name, imgSrc: item.imgSrc, Position: item.Position, linkToSite: item.linkToSite });
  });

  const uniqueCategories = Object.keys(categoryItemsMap);

  return (
    <div style={{ paddingTop: '90px', backgroundColor:'rgb(17, 50, 91)',  minHeight:'88vh',}}>
      <div className="container" >
        <div className="row accordion" id="accordion" >
          {uniqueCategories.map((category, index) => (
            <div key={index} className="col-xl-6">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="card accordion-item product_list" style={{ backgroundColor:'rgb(188, 196, 214)',paddingRight:'0px', paddingLeft:'0px'}}
                  >
                    <div className="card-header accordion-header" >
                      <div
                        className="btn btn-link accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#item${index + 1}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                      >
                        <div className="list_image">
                        </div>
                        <h5 className="title">{category}</h5>
                      </div>
                    </div>
                    <div
                      id={`item${index + 1}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="row">
                          {categoryItemsMap[category].map((item, itemIndex) => (
                            <div key={itemIndex} className="col-md-6 col-6">
                              {/* Updated the col class to col-md-6 */}
                              <ListBlockItem imgSrc={item.imgSrc} title={item.Name} position={item.Position} linkToSite={item.linkToSite} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HallOfFamePage;
