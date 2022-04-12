/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

const index = () => {
  const [splitMode, setSplitMode] = React.useState(false);

  const [background, setBackground] = React.useState({
    isSet: true,
    value: "#0D8ABC",
  });
  const [color, setColor] = React.useState({
    isSet: false,
    value: "#FFFFFF",
  });
  const [name, setName] = React.useState({
    isSet: true,
    value: "UI",
  });
  const [length, setLength] = React.useState({
    isSet: false,
    value: "2",
  });
  const [size, setSize] = React.useState({
    isSet: false,
    value: "200",
  });
  const [fontSize, setFontSize] = React.useState({
    isSet: false,
    value: "0.33",
  });
  const [rounded, setRounded] = React.useState({
    isSet: false,
    value: "true",
  });
  const [bold, setBold] = React.useState({
    isSet: false,
    value: "true",
  });
  const [uppercase, setUppercase] = React.useState({
    isSet: false,
    value: "true",
  });
  const [format, setFormat] = React.useState({
    isSet: false,
    value: "svg",
  });

  const url = `https://ui-avatars.com/api/?${
    background.isSet
      ? "background=" + background.value.substring(1, background.value.length)
      : ""
  }${
    color.isSet ? "&color=" + color.value.substring(1, color.value.length) : ""
  }${name.isSet ? "&name=" + name.value : ""}${
    length.isSet ? "&length=" + length.value : ""
  }${size.isSet ? "&size=" + size.value : ""}${
    fontSize.isSet ? "&font-size=" + fontSize.value : ""
  }${rounded.isSet ? "&rounded=" + rounded.value : ""}${
    bold.isSet ? "&bold=" + bold.value : ""
  }${uppercase.isSet ? "&uppercase=" + uppercase.value : ""}${
    format.isSet ? "&format=" + format.value : ""
  }`;

  return (
    <div className="container mx-auto max-w-5xl px-4 flex flex-col justify-between min-h-screen">
      <header className="py-8 flex justify-center md:justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          <span className="py-1 px-4 bg-primary-400 text-primary-800">
            UI Avatars
          </span>
          <span className="py-1 px-4 bg-primary-800 text-primary-400">
            Playground
          </span>
        </h1>
        {/* split mode btn */}
        <div className="">
          {/* <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4"
            onClick={() => setSplitMode(!splitMode)}
          >
            {!splitMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-monitor"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-columns"
              >
                <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
              </svg>
            )}
          </button> */}
        </div>
      </header>
      <main
        className={
          splitMode
            ? "mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            : "grid grid-cols-1 gap-4"
        }
      >
        {/* preview */}
        <div
          className={`flex flex-col justify-start items-center md:items-start gap-4 ${splitMode}`}
        >
          <div className="">
            <img
              src={url ?? "https://ui-avatars.com/api/?name="}
              alt="avatar"
              className="w-40 md:w-52 ring-2 ring-offset-1 ring-primary-500"
            />
          </div>
          <div className="flex flex-col md:flex-row  gap-1 justify-center items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className="py-2 px-4 bg-green-600 text-white"
            >
              GET
            </a>
            <code className="py-2 px-4 bg-gray-100">{url}</code>
          </div>
        </div>
        {/* from */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${splitMode}`}>
          {/* background */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={background.isSet}
                onChange={() =>
                  setBackground({
                    isSet: !background.isSet,
                    value: background.isSet ? "" : background.value,
                  })
                }
              />
              <span className="ml-2">Background</span>
            </label>
            <input
              type="color"
              className=""
              value={background.value}
              onChange={(e) =>
                setBackground({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
            <input
              type="text"
              className=""
              value={background.value}
              onChange={(e) =>
                setBackground({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* color */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={color.isSet}
                onChange={() =>
                  setColor({
                    isSet: !color.isSet,
                    value: color.isSet ? "" : color.value,
                  })
                }
              />
              <span className="ml-2">Color</span>
            </label>
            <input
              type="color"
              className=""
              value={color.value}
              onChange={(e) =>
                setColor({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
            <input
              type="text"
              className=""
              value={color.value}
              onChange={(e) =>
                setColor({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* name */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={name.isSet}
                onChange={() =>
                  setName({
                    isSet: !name.isSet,
                    value: name.isSet ? "" : name.value,
                  })
                }
              />
              <span className="ml-2">Name</span>
            </label>
            <input
              type="text"
              className=""
              value={name.value}
              onChange={(e) =>
                setName({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* length */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={length.isSet}
                onChange={() =>
                  setLength({
                    isSet: !length.isSet,
                    value: length.isSet ? "" : length.value,
                  })
                }
              />
              <span className="ml-2">Length</span>
            </label>
            <input
              type="number"
              className=""
              value={length.value}
              onChange={(e) =>
                setLength({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* size */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={size.isSet}
                onChange={() =>
                  setSize({
                    isSet: !size.isSet,
                    value: size.isSet ? "" : size.value,
                  })
                }
              />
              <span className="ml-2">Size</span>
            </label>
            <input
              type="number"
              className=""
              value={size.value}
              onChange={(e) =>
                setSize({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* fontSize */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={fontSize.isSet}
                onChange={() =>
                  setFontSize({
                    isSet: !fontSize.isSet,
                    value: fontSize.isSet ? "" : fontSize.value,
                  })
                }
              />
              <span className="ml-2">Font Size</span>
            </label>
            <input
              type="number"
              className=""
              value={fontSize.value}
              onChange={(e) =>
                setFontSize({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* format */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={format.isSet}
                onChange={() =>
                  setFormat({
                    isSet: !format.isSet,
                    value: format.isSet ? "" : format.value,
                  })
                }
              />
              <span className="ml-2">Format</span>
            </label>
            <input
              type="text"
              className=""
              value={format.value}
              onChange={(e) =>
                setFormat({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* bold */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={bold.isSet}
                onChange={() =>
                  setBold({
                    isSet: !bold.isSet,
                    value: bold.isSet ? "" : bold.value,
                  })
                }
              />
              <span className="ml-2">Bold</span>
            </label>
            <input
              type="text"
              className=""
              value={bold.value}
              onChange={(e) =>
                setBold({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* rounded */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rounded.isSet}
                onChange={() =>
                  setRounded({
                    isSet: !rounded.isSet,
                    value: rounded.isSet ? "" : rounded.value,
                  })
                }
              />
              <span className="ml-2">Rounded</span>
            </label>
            <input
              type="text"
              className=""
              value={rounded.value}
              onChange={(e) =>
                setRounded({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
          {/* uppercase */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={uppercase.isSet}
                onChange={() =>
                  setUppercase({
                    isSet: !uppercase.isSet,
                    value: uppercase.isSet ? "" : uppercase.value,
                  })
                }
              />
              <span className="ml-2">Uppercase</span>
            </label>
            <input
              type="text"
              className=""
              value={uppercase.value}
              onChange={(e) =>
                setUppercase({
                  isSet: true,
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </main>
      <footer className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-auto py-6 text-gray-500">
        <p>UI Avatars Playground</p>
        <p>Built With Next js + https://ui-avatars.com</p>
      </footer>
    </div>
  );
};

export default index;
