import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from './Card';
function App() {
  let data = [

// tier for free
    {
      title: "free",
      price: "$0",
      features: [
        {
          text: [{
              phrase: "Single User",
          }]
        },
        {
          text: [{
              phrase: "5 GB Storage",
          }]
        },
        {
          text: [{
              phrase: "Unlimited Public Projects",
          }]
        },
        {
          text: [{
              phrase: "Community Access",
          }]
        },
        {
          text: [{
              phrase: "Unlimited Private Projects",
              mute: true,
          }]
        },
        {
          text: [{
              phrase: "Dedicated Phone Support",
              mute: true,
          }]
        },
        {
          text: [{
              phrase: "Free Subdomain",
              mute: true,
          }]
        },
        {
          text: [{
              phrase: "Monthly Status Reports",
              mute: true,
          }]        }
      ]
    },

// tier for plus
    {
      title: "plus",
      price: "$9",
      features: [
        {
          text: [{
              phrase: "5 Users",
              bold: true
          }]
        },
        {
          text: [{
              phrase: "50 GB Storage",
          }]
        },
        {
         text: [{
              phrase: "Unlimited Public Projects",
          }]
        },
        {
         text: [{
              phrase: "Community Access",
          }]
        },
        {
          text: [{
              phrase: "Unlimited Private Projects",
          }]
        },  
        {
         text: [{
              phrase: "Dedicated Phone Support",
          }]
        },
        {  
          text: [{
              phrase: "Free Subdomain",
          }]
        },
        {
          text: [{
              phrase: "Monthly Status Reports",
              mute: true,
            }]
        }
      ]
      
    },

// tier for pro 
    {
      title: "pro",
      price: "$49",
      features: [
        {
          text: [{
              phrase: "Unlimited Users",
              bold: true
          }]
        },
        {
          text: [{
              phrase: "150GB Storage",
          }]
        },
        {
          text: [{
              phrase: "Unlimited Public Projects",
          }]
        }, 
        {
          text: [{
              phrase: "Community Access",
          }]
        },
        {
          text: [{
              phrase: "Unlimited Private Projects",
          }]
        },
        {
         text: [{
              phrase: "Dedicated Phone Support",
          }]
        },
        {
          text: [
            {
              phrase: "Unlimited",
              bold: true
            },
            {
              phrase: "Free Subdomain",
            }
          ]
        },
        {
          text: [{
              phrase: "Monthly Status Reports",
            }]
        }
      ]
    }]
  
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">          
          {
            data.map((e) => {
              return <Card obj = {e}></Card>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;