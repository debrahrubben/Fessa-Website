import Bernice from '../images/HallofFameImages/Bernice Afi Agbanyo.jpg'
import Kerker from '../images/HallofFameImages/Christian Kerker.jpg'
import Asare from '../images/HallofFameImages/Dennis Asare.jpg'
import Osei from '../images/HallofFameImages/Frimpong Eric Osei.jpg'
import Ampah from '../images/HallofFameImages/Jeremiah Ampah.jpg'
import Mintah from '../images/HallofFameImages/Kenseng Mintah vice.jpg'
import Bonsu from '../images/HallofFameImages/Kwame Bonsu.jpg'
import Umar from '../images/HallofFameImages/Mohammed Umar Nadra.jpg'
import Nartey from '../images/HallofFameImages/Naomi Nartey Mateykie.jpg'
import Shadrack from '../images/HallofFameImages/Shadrack.jpg'
import Rubben from '../images/HallofFameImages/Rubben.jpg'
import Grace from '../images/HallofFameImages/Grace Abena Bossman.jpg'
import wocom1 from '../images/HallofFameImages/wocom1.jpg'
import wocom2 from '../images/HallofFameImages/wocom2.jpg'
import wocom3 from '../images/HallofFameImages/wocom3.jpg'
import academic from '../images/HallofFameImages/academic.jpg'
import judiciary from '../images/HallofFameImages/judiciary.jpg'
import electorial from '../images/HallofFameImages/electorial.jpg'
import electorial2 from '../images/HallofFameImages/electorial2.jpg'
import electorial3 from '../images/HallofFameImages/electorial3.jpg'
import sports from '../images/HallofFameImages/sports.jpg'
import sports2 from '../images/HallofFameImages/sports2.jpg'
import publicrelation from '../images/HallofFameImages/public.jpg'
import sponsorship from '../images/HallofFameImages/sponsorship.jpg'
import christian from '../images/HallofFameImages/christian.jpg'
import islamic from '../images/HallofFameImages/islamic.jpg'




import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListBlockItem({ imgSrc, title, discount }) {
  return (
    <div className="list-block-item">
      <img src={imgSrc} className="image-fit-contain" alt="img" />
      <h6 className="title">{title}</h6>
      <p className="discount"><strong>{discount}</strong></p>
    </div>
  );
}

function renderListItems(items) {
  return items.map((item, index) => (
    <div key={index} className="col-sm-4 col-6">
      <ListBlockItem {...item} />
    </div>
  ));
}

// ... (imports and ListBlockItem component)
function HallOfFamePage() {
    const itemsData = [
      { imgSrc:'', category: '2024/2025 Executives', Name: 'Dennis Asare', Position: 'President' },
      { imgSrc: Ampah, category: '2024/2025 Executives', Name: 'Jeremiah Ampah', Position: 'Vice President' },
      { imgSrc: Nartey, category: '2024/2025 Executives', Name: 'Naomi Nartey Mateykie', Position: 'General Secretary' },
      { imgSrc: Osei, category: '2024/2025 Executives', Name: 'Frimpong Eric Osei', Position: 'Financial Secretary' },
      { imgSrc: Bernice, category: '2024/2025 Executives', Name: 'Bernice Afi Agbanyo', Position: 'Wocom' },
      { imgSrc: wocom1, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: wocom2, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: wocom3, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: academic, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: judiciary, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: electorial, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: electorial2, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: electorial3, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: sports, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: sports2, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: publicrelation, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: sponsorship, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: christian, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: islamic, category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: '', category: '2024/2025 Executives', Name: '', Position: '' },
      { imgSrc: 'https://www.bootdey.com/image/320x320/FF8C00/000000', category: '2022/2023 Executives', Name: 'Modern Chair', Position: 55 },
      { imgSrc: 'https://www.bootdey.com/image/320x320/8B008B/000000', category: '2021/2022 Executives', Name: 'Elegant Chair', Position: 60 },
      { imgSrc: 'https://www.bootdey.com/image/320x320/00CED1/000000', category: 'Lecturers', Name: 'Cozy Sofa', Position: 70 },
      // Add more categories and items as needed
    ];
  
    const categoryItemsMap = {};

  itemsData.forEach((item) => {
    const { category, Name } = item;

    if (!categoryItemsMap[category]) {
      categoryItemsMap[category] = [];
    }

    categoryItemsMap[category].push({ Name, imgSrc: item.imgSrc, Position: item.Position });
  });

  const uniqueCategories = Object.keys(categoryItemsMap);

  return (
    <div style={{ paddingTop: '90px' }}>
      <div className="container">
        <div className="row accordion" id="accordion">
          {uniqueCategories.map((category, index) => (
            <div key={index} className="col-xl-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card accordion-item product_list">
                    <div className="card-header accordion-header">
                      <div
                        className="btn btn-link accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#item${index + 1}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                      >
                        <div className="list_image">
                          <img
                            src="https://www.bootdey.com/image/320x320/FF69B4/000000"
                            className="image-fit-contain"
                            alt="category-img"
                          />
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
                            <div key={itemIndex} className="col-sm-6 col-12">
                              <ListBlockItem imgSrc={item.imgSrc} title={item.Name} discount={item.Position} />
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