import React from "react";

import classNames from "classnames";
import withStyles from "material-ui/styles/withStyles";

import Book from "@material-ui/icons/Book";
import Suitcase from "@material-ui/icons/Apps";
import Email from "@material-ui/icons/Email";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import IconButton from "./components/CustomButtons/IconButton.jsx";
import HeaderLinks from "./components/Header/HeaderLinks.jsx";
import NavPills from "./components/NavPills/NavPills.jsx";
import Parallax from "./components/Parallax/Parallax.jsx";
import Quote from "./components/Typography/Quote.jsx";

import profile from "./assets/img/uclem.jpg";
import work1 from "./assets/img/bank.jpg";
import work2 from "./assets/img/paysal-rails_2.jpg";
import work3 from "./assets/img/phonebook.jpg";
import work4 from "./assets/img/todo.jpg";

import profilePageStyle from "./assets/jss/profilePage.jsx";

class App extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="CU~Bryan"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("./assets/img/page-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Clement Udensi Bryan</h3>
                      <h6>Software Developer</h6>
                      <Quote
                        text="I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."
                        author=" Bruce Lee"
                      />
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>

              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="rose"
                    tabs={[
                      {
                        tabButton: "About",
                        tabIcon: Book,
                        tabContent: (
                          <p>
                            Clement is a JavaScript developer & an entrepreneur who is passionate about using technology as a tool for socio-economic change. He is big on using technology to solve real-life problems. He is proficient in web development technologies such as ReactJS, nodeJS, Ruby on rails. He is the co-founder of JoppaLogic, a tech solution that provides more visibility to the African supply chain ecosystem, which has the capacity to increase inter African trade..{" "}
                          </p>
                        )
                      },
                      {
                        tabButton: "Portfolio",
                        tabIcon: Suitcase,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <a href="https://github.com/clemudensi/bank_account_app" target="_blank" rel="noopener noreferrer" className="image fit thumb">Bank Account app in rails</a>
                              <p/>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <a href="https://github.com/clemudensi/paysal" target="_blank" rel="noopener noreferrer" className="image fit thumb">Pay Salary App in rails</a>
                              <p/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                              <a href="https://github.com/clemudensi/phonebook-interface"
                                 target="_blank" rel="noopener noreferrer" className="image fit thumb">Pay Salary App in rails</a>
                              <p/>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <a href="https://github.com/clemudensi/todo-firebase"
                                 target="_blank" rel="noopener noreferrer" className="image fit thumb">Pay Salary App in rails</a>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Contact",
                        tabIcon: Email,
                        tabContent: (
                          <div>
                            <h3>Reach out</h3>
                              <p>Send me an <a href="mailto: clementudensi@gmail.com" target="_top">email</a>
                              </p>
                            <br/>
                            <IconButton
                              color="transparent"
                              href="https://twitter.com/udensiclem"
                              target="_blank"
                              className={classes.margin5}
                            >
                              <i className={classes.socials + " fab fa-twitter"} />
                            </IconButton>
                            <IconButton
                              color="transparent"
                              href="https://www.linkedin.com/in/udensiclem"
                              target="_blank"
                              className={classes.margin5}
                            >
                              <i className={classes.socials + " fab fa-linkedin"} />
                            </IconButton>
                            <IconButton
                              color="transparent"
                              href="https://www.facebook.com/udensiclem"
                              target="_blank"
                              className={classes.margin5}
                            >
                              <i className={classes.socials + " fab fa-facebook"} />
                            </IconButton>
                          </div>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(App);
