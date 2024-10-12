import './Classes.css';

export default function Classes() {
  const color = 'blue';
  const dangerous = true;
  
  return (
    <div id="wd-classes">
      <h2>Classes</h2>
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}>
       Dangerous background
     </div> 
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic {color.charAt(0).toUpperCase() + color.slice(1)} background
      </div>
      <hr />
    </div>
  );
}