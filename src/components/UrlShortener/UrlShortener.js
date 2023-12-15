import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';

import './UrlShortener.css'



const UrlShortener = ({ inputValue }) => {

    const [shortLink, setShortLink] = useState("")
    console.log(shortLink)
    const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        try {
          setLoading(true);
          const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
          setShortLink(res.data.result.full_short_link);
        } catch(err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }

    useEffect(() => {
        if(inputValue) {
          fetchData();
        }
        // eslint-disable-next-line
      }, [inputValue]);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
      }, [copied]);
    
      if(loading) {
        return <p className="noData">Loading...</p>
      }
      if(error) {
        return <p className="noData">error!(</p>
      }


  return (
    <>
    {shortLink && (
        <div className='result'>
            <p>{shortLink}</p>
            <CopyToClipboard text={shortLink} onCopy={()=>setCopied(true)}>
                <button className={copied ? "copied" : ""}>CopyToClipboard</button>
            </CopyToClipboard>
            <h1 className='ttt'>hellow world</h1>
        </div>
    )}
    {/* <h1 className='ttt'>hellow world</h1> */}
    </>
  );
};

export default UrlShortener
