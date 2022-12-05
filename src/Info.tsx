type InfoProps = {
 age: Number;
 benchpress: Number;
 deadlift: Number | undefined;
 record: String;
 dateOfRecord?: Date;
}

const Info = ({age, benchpress, deadlift, record, dateOfRecord}: InfoProps) => {
    const running = {
        distance: '21km',
        time: 2,
    };
    return (
        <>
        <>Age: {age}</>
        <br/>
        <>Benchpress: {benchpress}</>
        <br/>
        <>{deadlift ? `Deadlift: ${deadlift}` : 'no record'}</>
        <p>Record: {record}</p>
        {dateOfRecord?.toDateString()}
        <br />
        I will run {running.distance}
        <br />
        My time is {running.time}
        </>
    )
}
export default Info;