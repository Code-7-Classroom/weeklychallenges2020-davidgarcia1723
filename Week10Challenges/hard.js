const colorBackground = () => {
    const red = () => {   
        document.querySelector(".bodyBackground").style['background-color'] = 'red'; 
    } ;

    const white = () => {   
        document.querySelector(".bodyBackground").style['background-color'] = 'white';  
    };
    
    document.querySelector (".red").addEventListener('click', red);
    document.querySelector (".white").addEventListener('click', white);
}

colorBackground();