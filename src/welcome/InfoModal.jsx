import React, { useState } from 'react';
import Modal from 'react-modal';

const InfoModal = () => {
  const [modalIsOpen, setModalIsOpen]=useState(false)
  return (
    <div className="modal">
      <button className={'with-text'} onClick={()=>setModalIsOpen(true)}>Help</button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}>
        <div className="modalContent">
          <h2>The One Thing</h2>

          <h3>Philosophy behind The One Thing habit</h3>
          <p>
            The most successful people are also the most productive. They are the ones who can make the
            most of their available time. They are able to accomplish their tasks and achieve outstanding
            results because they always spend as much time as possible with The One Thing that takes
            them the most forward.
            You’re called to achieve great things if you can honestly say every time you think about where
            you should be, “I need to be right here doing the things I’m doing right now.”
            The focusing question helps with this:
          </p>
          <ul>
            <li>The first part of the question: "What is The One Thing I Can Do .." This will help you
              focus and figure out what you can do. The emphasis here is on being able to do it. The
              declarative mode is important!</li>
            <li>The second part is, "..with doing this .." Here it is decided that you are just doing
              something or that it has some lofty, forward-looking purpose.</li>
            <li>The third part of the question is, "..will everything else be easier or completely
              unnecessary?" This closure tells you that if you do that One Thing, everything else will
              come easier, or you may have to do it unnecessarily.</li>
          </ul>
          <hr />
          <h3>Use</h3>
          <div className="settingsBtn">Let' Focus</div>
          <p>Set your Focus Question, worktime and breaktime.</p>
          <div className="settingsBtn">Settings</div>
          <p>Set your pomodoro's appearance.</p>
        </div>
        <hr />
        <div>
          <button className="closeModal" onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
      
    </div>
  )}

export default InfoModal