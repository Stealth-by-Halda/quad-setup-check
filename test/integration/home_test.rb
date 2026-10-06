require "test_helper"

class HomeTest < ActionDispatch::IntegrationTest
  test "renders the environment check" do
    get root_path

    assert_response :success
    assert_select "h1", /Your environment works/
  end
end
