//time set setup here 
const getConvertTime = (time) =>{
    const hour = parseInt(time / 3600);
    const remineSecond = time % 3600;
    const minute = parseInt(remineSecond / 60);
    const second = remineSecond % 60;
    return`${hour} hours ${minute} minutes and ${second} second`
};


