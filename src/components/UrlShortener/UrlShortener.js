import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';

import './UrlShortener.css'



const UrlShortener = ({ inputValue }) => {

    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        try {
          setLoading(true);
          const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
          setShortenLink(res.data.result.full_short_link);
        } catch(err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }

      useEffect(() => {
        if(inputValue) fetchData();
      }, [inputValue]);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
      }, [copied]);
    
      if(loading) {
        return <p className="no-data">Loading...</p>
      }
      if(error) {
        return <p className="no-data">error!</p>
      }


  return (
    <>
        {shortenLink && (
        <div className='result'>
        <p className='result-p'>{shortenLink}</p>
        <CopyToClipboard text={shortenLink} onCopy={()=>setCopied(true)}>
            <button className={copied ? "copied" : ""}>Copy This</button>
        </CopyToClipboard>
        </div>
        )}

        <h1 className='ttt'>hello world</h1>

        {/* <div className='result'>
                <p className='result-p'>{shortenLink}</p>
                <CopyToClipboard text={shortenLink} onCopy={()=>setCopied(true)}>
                    <button className={copied ? "copied" : ""}>Copy This</button>
                </CopyToClipboard>
        </div> */}
    </>
  );
};

export default UrlShortener
