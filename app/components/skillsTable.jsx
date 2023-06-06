import Image from "next/image";

export default function SkilsTable({ data, character, vision }) {
  function changeLevel(lvl) {
    if (lvl === 1) {
      return 1;
    }
    if (lvl === 4) {
      return 2;
    }
  }
  function changeAtack(txt) {
    if (txt === "Normal Attack") {
      return "talent-na";
    }
    if (txt === "Elemental Skill") {
      return "talent-skill";
    }
    if (txt === "Elemental Burst") {
      return "talent-burst";
    }
    if (txt === "Right Click") {
      return "talent-passive-misc";
    }
  }
  return (
    <div>
      <h2
        className="text-2xl font-semibold border-b-2 border-zinc-200 my-10"
        style={{ color: `var(--${vision}-color)` }}
      >
        Skills Talents
      </h2>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 rounded-md">
          {data.skillTalents.map((el, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 shadow-md p-5 ring-1 ring-zinc-200 rounded-md "
            >
              <Image
                src={`https://api.genshin.dev/characters/${character}/${changeAtack(
                  el.unlock
                )}`}
                width={50}
                height={50}
                alt=""
              ></Image>
              <div>
                <h2 className="text-xl font-semibold">{el.name}</h2>
                <h3 className="text-md text-zinc-600 font-semibold">
                  {el.unlock}
                </h3>
                <p className="text-sm text-zinc-500">{el.description}</p>
              </div>
              <div>
                {el.upgrades && (
                  <table className="ring-1 ring-zinc-100 rounded-lg overflow-hidden ">
                    <tbody>
                      {el.upgrades.map((e, i) => (
                        <tr key={i}>
                          <td className="border border-zinc-200 p-3 text-sm text-zinc-500">
                            {e.name}
                          </td>
                          <td className="border border-zinc-200 p-3 text-sm text-zinc-800">
                            {e.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <h2
        className="text-2xl font-semibold border-b-2 border-zinc-200 my-10"
        style={{ color: `var(--${vision}-color)` }}
      >
        Passive Talents
      </h2>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 rounded-md">
          {data.passiveTalents.map((el, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 shadow-md p-5 ring-1 ring-zinc-200 rounded-md "
            >
              {el.level ? (
                <Image
                  //   src={`https://www.genshinlab.com/wp-content/uploads/2021/07/${character}`}
                  src={`https://api.genshin.dev/characters/${character}/talent-passive-${changeLevel(
                    el.level
                  )}`}
                  width={50}
                  height={50}
                  alt=""
                ></Image>
              ) : (
                <Image
                  src={`https://api.genshin.dev/characters/${character}/talent-passive-0`}
                  width={50}
                  height={50}
                  alt=""
                ></Image>
              )}
              <div>
                <h2 className="text-xl font-semibold">{el.name}</h2>
                <h3 className="text-md text-zinc-600 font-semibold">
                  {el.unlock}
                </h3>
                <p className="text-sm text-zinc-500">{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2
        className="text-2xl font-semibold border-b-2  border-zinc-200 my-10"
        style={{ color: `var(--${vision}-color)` }}
      >
        Constelations
      </h2>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 rounded-md">
          {data.constellations.map((el, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 shadow-md p-5 ring-1 ring-zinc-200 rounded-md "
            >
              <Image
                src={`https://api.genshin.dev/characters/${character}/constellation-${el.level}`}
                width={50}
                height={50}
                alt=""
              ></Image>
              <div>
                <h2 className="text-xl font-semibold">{el.name}</h2>
                <h3 className="text-md text-zinc-600 font-semibold">
                  {el.unlock}
                </h3>
                <p className="text-sm text-zinc-500">{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
