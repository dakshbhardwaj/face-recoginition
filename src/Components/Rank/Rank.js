import React  from 'react';

const  Rank = ({name,entries}) =>
{ return(
      <div>
         <div class="white f3 ">
           {`${name}, Your Current Entry Count Of The Image is...`}
            </div>
           <div class="white f1">
             {entries}
      </div>
    </div>
    );
}
export default Rank;
