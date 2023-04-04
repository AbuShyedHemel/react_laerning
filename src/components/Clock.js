import React from 'react';
import Button from './button';

class Clock extends React.Component {
    state = { date: new Date(), locale : 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    handleClick = (locale) => {
        //console.log(this);
        this.setState({
            locale
        });
        //console.log("The button is clicked");
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('Clock Component render');
        const { date, locale } = this.state;
        //const { locale } = this.props;
        // let button;
        // if(locale === 'bn-BD'){
        //     button = <Button change={this.handleClick} locale ='en-US'>Click here</Button>
        // }else
        // {
        //     button = <Button change={this.handleClick} locale ='bn-BD'>Click here</Button>
        // }
        return (
            <div>
            <h1 className="heading">
                <span className="text">{date.toLocaleTimeString(locale)}</span>
            </h1>

            {
                locale==='bn-BD'?(<Button change={this.handleClick} 
                locale ='en-US' show={false}></Button>):
                (<Button change={this.handleClick} 
                locale ='bn-BD'show ></Button>)
            }
            </div>
        );
    }
}

export default Clock;