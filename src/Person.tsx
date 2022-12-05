import Name from './GetName';
import Info from './Info';

const Person = (props: {name: string, benchpress: Number, deadlift?: Number | undefined}) => {
    const {name, benchpress, deadlift} : {name: string, benchpress: Number, deadlift?: Number} = props;
    const recordDate = new Date('2020-06-22');
    return (
        <>
            {Name(name) + ', powerlifter'}
            <p>
            <Info
                age={32}
                benchpress={benchpress}
                deadlift={deadlift}
                record={'this is record'}
                dateOfRecord={recordDate}
            />
            </p>
        </>
    )
}
export default Person;